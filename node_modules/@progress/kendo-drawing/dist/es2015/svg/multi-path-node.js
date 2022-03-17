import PathNode from './path-node';

class MultiPathNode extends PathNode {
    renderData() {
        const paths = this.srcElement.paths;

        if (paths.length > 0) {
            const result = [];

            for (let i = 0; i < paths.length; i++) {
                result.push(this.printPath(paths[i]));
            }

            return result.join(" ");
        }
    }
}

export default MultiPathNode;
