"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectList = void 0;
const project_js_1 = require("../models/project.js");
const base_component_js_1 = __importDefault(require("./base-component.js"));
const autobind_js_1 = require("../decorators/autobind.js");
const project_state_js_1 = require("../state/project-state.js");
const project_item_js_1 = require("./project-item.js");
// ProjectList Class
let ProjectList = /** @class */ (() => {
    class ProjectList extends base_component_js_1.default {
        constructor(type) {
            super('project-list', 'app', false, `${type}-projects`);
            this.type = type;
            this.assignedProjects = [];
            this.configure();
            this.renderContent();
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        }
        dropHandler(event) {
            const prjId = event.dataTransfer.getData('text/plain');
            project_state_js_1.projectState.moveProject(prjId, this.type === 'active' ? project_js_1.ProjectStatus.Active : project_js_1.ProjectStatus.Finished);
        }
        dragLeaveHandler(_) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            project_state_js_1.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === 'active') {
                        return prj.status === project_js_1.ProjectStatus.Active;
                    }
                    return prj.status === project_js_1.ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent =
                this.type.toUpperCase() + ' PROJECTS';
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`);
            listEl.innerHTML = '';
            for (const prjItem of this.assignedProjects) {
                new project_item_js_1.ProjectItem(this.element.querySelector('ul').id, prjItem);
            }
        }
    }
    __decorate([
        autobind_js_1.autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        autobind_js_1.autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        autobind_js_1.autobind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    return ProjectList;
})();
exports.ProjectList = ProjectList;
