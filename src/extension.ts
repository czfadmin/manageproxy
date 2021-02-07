// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {
	addHttpProxy,
	addItemIntoStatusBar,
	configureHttpRequest,
	enableAutoChangeHttpProxy,
	pingProxy,
	registerCommand,
	testHttpProxy,
	toggleHttpProxy,
	updateStatusbarItemStatus
} from './utils';

let manageProxyConfig = vscode.workspace.getConfiguration("manageproxy");
export function activate(context: vscode.ExtensionContext) {
	let statusBarItem = addItemIntoStatusBar();
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
		configureHttpRequest();
		if (vscode.workspace.getConfiguration('manageproxy')['autoChange'] === true) {
			pingProxy();
		}
	}));
	updateStatusbarItemStatus(statusBarItem);
	statusBarItem.show();
	registerCommand(context, "toggleHttpProxy", toggleHttpProxy);
	registerCommand(context, "enableAutoChangeHttpProxy", enableAutoChangeHttpProxy);
	registerCommand(context, "testHttpProxy", testHttpProxy);
	registerCommand(context, "addHttpProxy", addHttpProxy);
}

// this method is called when your extension is deactivated
export function deactivate() { }
