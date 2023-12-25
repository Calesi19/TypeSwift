import { Database, RunResult } from 'sqlite3';
import * as path from 'path';

interface Shortcut {
    id?: number;
    shortcut: string;
    phrase: string;
}

class ShortcutsController {
    private static instance: ShortcutsController;
    private db: Database;

    private constructor() {
        const dbPath = path.resolve(__dirname, 'shortcuts.sqlite3');
        this.db = new Database(dbPath, (err) => {
            if (err) {
                console.error('Error opening database', err.message);
            }
        });

        this.initializeTable();
    }

    public static getInstance(): ShortcutsController {
        if (!ShortcutsController.instance) {
            ShortcutsController.instance = new ShortcutsController();
        }
        return ShortcutsController.instance;
    }

    private initializeTable(): void {
        const query = `
            CREATE TABLE IF NOT EXISTS shortcuts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                shortcut TEXT NOT NULL,
                phrase TEXT NOT NULL
            )
        `;
        this.db.run(query, (err) => {
            if (err) console.error('Error creating table', err.message);
        });
    }

    public getAllShortcuts(callback: (err: Error | null, rows: Shortcut[]) => void): void {
        this.db.all("SELECT * FROM shortcuts", [], callback);
    }

    public addShortcut(shortcut: string, phrase: string, callback: (err: Error | null) => void): void {
        this.db.run("INSERT INTO shortcuts (shortcut, phrase) VALUES (?, ?)", [shortcut, phrase], callback);
    }

    public editShortcut(id: number, newShortcut: string, newPhrase: string, callback: (err: Error | null) => void): void {
        this.db.run("UPDATE shortcuts SET shortcut = ?, phrase = ? WHERE id = ?", [newShortcut, newPhrase, id], callback);
    }

    public deleteShortcut(id: number, callback: (err: Error | null) => void): void {
        this.db.run("DELETE FROM shortcuts WHERE id = ?", [id], callback);
    }
}

export default ShortcutsController;
