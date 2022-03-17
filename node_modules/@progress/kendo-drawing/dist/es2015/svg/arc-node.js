import PathNode from './path-node';

class ArcNode extends PathNode {
    renderData() {
        return this.printPath(this.srcElement.toPath());
    }
}

export default ArcNode;
