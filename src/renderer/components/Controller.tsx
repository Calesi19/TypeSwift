


class ExpanderController {

    isRunning: boolean = true;


    toggleExpanderScript() {
        window.electron.ipcRenderer.sendMessage('toggle-python-script', this.isRunning);
        this.isRunning = !this.isRunning;
    }
}

export default ExpanderController;