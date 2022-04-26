import { TreeNode, WrapperTree } from './style'

const CategoryThree = ({ categories = [] }) => (
    <WrapperTree>
        {categories.map((category) => (
            <TreeNode key={category}>
                {category}
            </TreeNode>
        ))}
    </WrapperTree>
)

export default CategoryThree
