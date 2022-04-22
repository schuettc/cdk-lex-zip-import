# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Bot <a name="Bot" id="@schuettc/cdk-lex-zip-import.Bot"></a>

#### Initializers <a name="Initializers" id="@schuettc/cdk-lex-zip-import.Bot.Initializer"></a>

```typescript
import { Bot } from '@schuettc/cdk-lex-zip-import'

new Bot(scope: Construct, id: string, props: LexBotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.Initializer.parameter.props">props</a></code> | <code><a href="#@schuettc/cdk-lex-zip-import.LexBotProps">LexBotProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@schuettc/cdk-lex-zip-import.Bot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@schuettc/cdk-lex-zip-import.Bot.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@schuettc/cdk-lex-zip-import.Bot.Initializer.parameter.props"></a>

- *Type:* <a href="#@schuettc/cdk-lex-zip-import.LexBotProps">LexBotProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@schuettc/cdk-lex-zip-import.Bot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@schuettc/cdk-lex-zip-import.Bot.isConstruct"></a>

```typescript
import { Bot } from '@schuettc/cdk-lex-zip-import'

Bot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@schuettc/cdk-lex-zip-import.Bot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.property.botAliasId">botAliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.Bot.property.botId">botId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@schuettc/cdk-lex-zip-import.Bot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `botAliasId`<sup>Required</sup> <a name="botAliasId" id="@schuettc/cdk-lex-zip-import.Bot.property.botAliasId"></a>

```typescript
public readonly botAliasId: string;
```

- *Type:* string

---

##### `botId`<sup>Required</sup> <a name="botId" id="@schuettc/cdk-lex-zip-import.Bot.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

---


### LexImportCustomResource <a name="LexImportCustomResource" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource"></a>

#### Initializers <a name="Initializers" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer"></a>

```typescript
import { LexImportCustomResource } from '@schuettc/cdk-lex-zip-import'

new LexImportCustomResource(scope: Construct, id: string, props: LexImportCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps">LexImportCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps">LexImportCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.isConstruct"></a>

```typescript
import { LexImportCustomResource } from '@schuettc/cdk-lex-zip-import'

LexImportCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResource.property.lexImport">lexImport</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.property.lambda"></a>

```typescript
public readonly lambda: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `lexImport`<sup>Required</sup> <a name="lexImport" id="@schuettc/cdk-lex-zip-import.LexImportCustomResource.property.lexImport"></a>

```typescript
public readonly lexImport: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---


### S3Upload <a name="S3Upload" id="@schuettc/cdk-lex-zip-import.S3Upload"></a>

#### Initializers <a name="Initializers" id="@schuettc/cdk-lex-zip-import.S3Upload.Initializer"></a>

```typescript
import { S3Upload } from '@schuettc/cdk-lex-zip-import'

new S3Upload(scope: Construct, id: string, props: S3UploadProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.Initializer.parameter.props">props</a></code> | <code><a href="#@schuettc/cdk-lex-zip-import.S3UploadProps">S3UploadProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@schuettc/cdk-lex-zip-import.S3Upload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@schuettc/cdk-lex-zip-import.S3Upload.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@schuettc/cdk-lex-zip-import.S3Upload.Initializer.parameter.props"></a>

- *Type:* <a href="#@schuettc/cdk-lex-zip-import.S3UploadProps">S3UploadProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@schuettc/cdk-lex-zip-import.S3Upload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@schuettc/cdk-lex-zip-import.S3Upload.isConstruct"></a>

```typescript
import { S3Upload } from '@schuettc/cdk-lex-zip-import'

S3Upload.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@schuettc/cdk-lex-zip-import.S3Upload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3Upload.property.lexZipBucket">lexZipBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@schuettc/cdk-lex-zip-import.S3Upload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lexZipBucket`<sup>Required</sup> <a name="lexZipBucket" id="@schuettc/cdk-lex-zip-import.S3Upload.property.lexZipBucket"></a>

```typescript
public readonly lexZipBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### LexBotProps <a name="LexBotProps" id="@schuettc/cdk-lex-zip-import.LexBotProps"></a>

Props for `LexBotImport`.

#### Initializer <a name="Initializer" id="@schuettc/cdk-lex-zip-import.LexBotProps.Initializer"></a>

```typescript
import { LexBotProps } from '@schuettc/cdk-lex-zip-import'

const lexBotProps: LexBotProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexBotProps.property.sourceDirectory">sourceDirectory</a></code> | <code>string</code> | Zip File location (required). |

---

##### `sourceDirectory`<sup>Required</sup> <a name="sourceDirectory" id="@schuettc/cdk-lex-zip-import.LexBotProps.property.sourceDirectory"></a>

```typescript
public readonly sourceDirectory: string;
```

- *Type:* string
- *Default:* None

Zip File location (required).

---

### LexImportCustomResourceProps <a name="LexImportCustomResourceProps" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.Initializer"></a>

```typescript
import { LexImportCustomResourceProps } from '@schuettc/cdk-lex-zip-import'

const lexImportCustomResourceProps: LexImportCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.lexZipBucket">lexZipBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.uid">uid</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
   CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
   by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `lexZipBucket`<sup>Required</sup> <a name="lexZipBucket" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.lexZipBucket"></a>

```typescript
public readonly lexZipBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `uid`<sup>Required</sup> <a name="uid" id="@schuettc/cdk-lex-zip-import.LexImportCustomResourceProps.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

### S3UploadProps <a name="S3UploadProps" id="@schuettc/cdk-lex-zip-import.S3UploadProps"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-lex-zip-import.S3UploadProps.Initializer"></a>

```typescript
import { S3UploadProps } from '@schuettc/cdk-lex-zip-import'

const s3UploadProps: S3UploadProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3UploadProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3UploadProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3UploadProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3UploadProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#@schuettc/cdk-lex-zip-import.S3UploadProps.property.sourceDirectory">sourceDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="@schuettc/cdk-lex-zip-import.S3UploadProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="@schuettc/cdk-lex-zip-import.S3UploadProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="@schuettc/cdk-lex-zip-import.S3UploadProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
   CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
   by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="@schuettc/cdk-lex-zip-import.S3UploadProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `sourceDirectory`<sup>Required</sup> <a name="sourceDirectory" id="@schuettc/cdk-lex-zip-import.S3UploadProps.property.sourceDirectory"></a>

```typescript
public readonly sourceDirectory: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### Hello <a name="Hello" id="@schuettc/cdk-lex-zip-import.Hello"></a>

#### Initializers <a name="Initializers" id="@schuettc/cdk-lex-zip-import.Hello.Initializer"></a>

```typescript
import { Hello } from '@schuettc/cdk-lex-zip-import'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-lex-zip-import.Hello.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayHello` <a name="sayHello" id="@schuettc/cdk-lex-zip-import.Hello.sayHello"></a>

```typescript
public sayHello(): string
```





