// !!
// This module defines ProseMirror's document model, the data
// structure used to define and inspect content documents. It
// includes:
//
// * The [node](#Node) type that represents document elements
//
// * The [schema](#Schema) types used to tag and constrain the
//   document structure
//
// This module does not depend on the browser API being available
// (i.e. you can load it into any JavaScript environment).

export {Node, Slice, PosContext, ReplaceError} from "./node"
export {Fragment} from "./fragment"
export {Mark} from "./mark"

export {SchemaSpec, Schema, SchemaError,
        NodeType, Block, Textblock, Inline, Text,
        MarkType, Attribute, NodeKind} from "./schema"
export {defaultSchema, Doc, BlockQuote, OrderedList, BulletList, ListItem,
        HorizontalRule, Paragraph, Heading, CodeBlock, Image, HardBreak,
        CodeMark, EmMark, StrongMark, LinkMark} from "./defaultschema"

export {findDiffStart, findDiffEnd} from "./diff"

export {ModelError} from "./error"
