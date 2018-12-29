## Cryptographic Hyperlinks

This specification describes a data model and serialization formats for 
expressing cryptographic hyperlinks.

When expressing a hyperlink to a resource on the Internet, it is often useful
to know if the resource has changed since the data was published at the given
hyperlink. Cryptographic hashes, such as SHA-256, are often used to determine 
if published data has changed in unexpected ways. 

While mechanisms such as [RFC6920](https://tools.ietf.org/html/rfc6920) and
[Magnet Links](https://en.wikipedia.org/wiki/Magnet_URI_scheme) exist, they
have a number of shortcomings such as implementation complexity, a focus on 
narrow use cases, and no clear extensibility or upgrade path.

This specification attempts to preserve the good parts of 
[RFC6920](https://tools.ietf.org/html/rfc6920), standardize the good parts of
[Magnet Links](https://en.wikipedia.org/wiki/Magnet_URI_scheme), and do so 
while ensuring that implementation complexity is kept to a minimum.

You can view an HTML version of the specification here:

[https://w3c-dvcg.github.io/hashlink/](https://w3c-dvcg.github.io/hashlink/)

We encourage contributions meeting the [Contribution
Guidelines](CONTRIBUTING.md).  While we prefer the creation of issues
and Pull Requests in the GitHub repository, discussions often occur
on the
[public-credentials](http://lists.w3.org/Archives/Public/public-credentials/)
mailing list as well.

### Other useful links
* [RFC6920 - Naming Things with Hashes](https://tools.ietf.org/html/rfc6920)
* [Magnet URI Scheme](https://en.wikipedia.org/wiki/Magnet_URI_scheme)
* [Public group email archive](https://lists.w3.org/Archives/Public/public-credentials/)
