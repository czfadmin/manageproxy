import { IHttpProxyConf } from './http_proxy_conf';
import * as vscode from 'vscode';
import { StatusBarItem } from 'vscode';
export function registerCommand(context: vscode.ExtensionContext, title: string, callback: any) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(`manageproxy.${title}`, callback);
	context.subscriptions.push(disposable);
}

export function addItemIntoStatusBar(): StatusBarItem {
	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
	statusBarItem.text = `undefined`
	statusBarItem.command = 'manageproxy.toggleProxy';
	statusBarItem.color = "#FFFFFF";
	return statusBarItem;
}

export function configureHttpProxy() {

}

export function getProxyConfig(): IHttpProxyConf {
	let config: any = vscode.workspace.getConfiguration('manageproxy');
	return config;
}

export function configureHttpRequest() {

}
export function pingProxy() {

}

export function updateStatusbarItemStatus(barItem: StatusBarItem) {

}

export function toggleHttpProxy() {

}

export function testHttpProxy() {

}

export function addHttpProxy() {

}
export function enableAutoChangeHttpProxy() {

}
