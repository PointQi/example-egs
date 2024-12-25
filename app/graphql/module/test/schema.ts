export const testTypeDefs = `#graphql

type Test {
    "测试 id"
    id: String

    "测试名称"
    name: String
}

type TestList {
    count: Int
    data: [Test]
}

type Query {
    "测试列表"
    testList: TestList
}
`;
