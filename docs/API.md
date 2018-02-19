# node-class-or-instance-inspector: API Reference

**Warning !** Work in progress...

## Classes

<dl>
<dt><a href="#ClassOrInstanceInspector">ClassOrInstanceInspector</a></dt>
<dd><p>Inspect a class or an instance.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#_">_</a></dt>
<dd><p>This file is part of node-class-or-instance-inspector</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT)">http://opensource.org/licenses/MIT)</a>.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#classOrInstanceInspector">classOrInstanceInspector(o)</a> ⇒ <code><a href="#ClassOrInstanceInspector">ClassOrInstanceInspector</a></code></dt>
<dd><p>A factory function to create an instance of {ClassOrInstanceInspector} then inspect provided object.</p>
</dd>
</dl>

<a name="ClassOrInstanceInspector"></a>

## ClassOrInstanceInspector
Inspect a class or an instance.

**Kind**: global class  
**Access**: public  

* [ClassOrInstanceInspector](#ClassOrInstanceInspector)
    * [new ClassOrInstanceInspector(o)](#new_ClassOrInstanceInspector_new)
    * _instance_
        * [.methods()](#ClassOrInstanceInspector+methods) ⇒ <code>array.&lt;string&gt;</code>
    * _static_
        * [.factory(o)](#ClassOrInstanceInspector.factory) ⇒ [<code>ClassOrInstanceInspector</code>](#ClassOrInstanceInspector)

<a name="new_ClassOrInstanceInspector_new"></a>

### new ClassOrInstanceInspector(o)
Create a new instance of {ClassOrInstanceInspector}.


| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to inspect. |

<a name="ClassOrInstanceInspector+methods"></a>

### classOrInstanceInspector.methods() ⇒ <code>array.&lt;string&gt;</code>
Returns methods of the provided object.

**Kind**: instance method of [<code>ClassOrInstanceInspector</code>](#ClassOrInstanceInspector)  
**Returns**: <code>array.&lt;string&gt;</code> - List of methods founded.  
**Access**: public  
<a name="ClassOrInstanceInspector.factory"></a>

### ClassOrInstanceInspector.factory(o) ⇒ [<code>ClassOrInstanceInspector</code>](#ClassOrInstanceInspector)
Factory to create an instance of {ClassOrInstanceInspector}.

**Kind**: static method of [<code>ClassOrInstanceInspector</code>](#ClassOrInstanceInspector)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to inspect. |

<a name="_"></a>

## _
This file is part of node-class-or-instance-inspector

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  
<a name="classOrInstanceInspector"></a>

## classOrInstanceInspector(o) ⇒ [<code>ClassOrInstanceInspector</code>](#ClassOrInstanceInspector)
A factory function to create an instance of {ClassOrInstanceInspector} then inspect provided object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to inspect. |


## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
