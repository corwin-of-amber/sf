function(Z){"use strict";var
g=Z.jsoo_runtime,d=g.caml_new_string,j=g.caml_register_global,Y=g.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):g.caml_call_gen(a,[b])}function
e(a,b,c){return a.length==2?a(b,c):g.caml_call_gen(a,[b,c])}function
w(a,b,c,d){return a.length==3?a(b,c,d):g.caml_call_gen(a,[b,c,d])}function
r(a,b,c,d,e){return a.length==4?a(b,c,d,e):g.caml_call_gen(a,[b,c,d,e])}var
b=g.caml_get_global_data(),o=d("string_notation_plugin"),l=b.Constrexpr_ops,x=b.Global,u=b.Smartlocate,z=b.Nametab,c=b.Pp,m=b.Libnames,A=b.CErrors,k=b.Names,y=b.Util,q=b.Vernacextend,p=b.Attributes,h=b.Stdarg,i=b.Genarg,am=b.CAst,ag=b.Evd,aq=b.Notation,B=b.Constrintern,v=b.Pretype_errors,s=b.Coqlib,F=b.Locality,C=b.Mltop;j(22,[0,0,0],"String_notation_plugin");var
al=[0,0],an=[0,0,1],au=[0,0,0],av=[0,1,1],aw=[0,1,0],ao=[0,0,1],ar=[0,0,0],as=[0,1,1],at=[0,1,0],X=d(" to Byte.byte or (option Byte.byte) or (list Byte.byte) or (option (list Byte.byte))."),_=d(" should go from "),J=d(")."),M=d(" or (option "),P=d(" should go from Byte.byte or (list Byte.byte) to "),I=d("core.byte.type"),H=d("core.list.type"),G=d("core.option.type"),L=d(":"),R=d("Notation"),S=d("String"),W=d("StringNotation");function
t(b){var
c=a(s[2],b);return w(z[48],0,k[1][10][1],c)}function
f(e,d,c,b){var
f=[0,a(l[10],c),[0,b]],g=a(l[11],f);try{r(B[10],e,d,0,g);var
h=1;return h}catch(a){a=Y(a);if(a[1]===v[1])return 0;throw a}}function
n(af,k,j,i,ae){var
b=a(x[2],0),d=a(ag[17],b);function
B(c,b){return a(l[15],[0,c,[0,b,0]])}function
q(b){return a(l[10],b)}var
n=q(t(I)),ah=q(t(H)),ai=q(t(G));function
r(a){return B(ai,a)}var
s=B(ah,n),v=a(u[4],k),aj=e(u[3],0,j),ak=e(u[3],0,i),g=q(k);function
h(c,b){var
d=[0,[0,e(am[1],0,0),0],al,c,b];return a(l[14],d)}var
C=a(x[32],v)[2][4];function
D(a,b){return[3,[0,v,a+1|0]]}var
E=e(y[19][16],D,C),F=a(y[19][11],E);if(f(b,d,j,h(s,g)))var
o=an;else
if(f(b,d,j,h(s,r(g))))var
o=au;else
if(f(b,d,j,h(n,g)))var
o=av;else
if(f(b,d,j,h(n,r(g))))var
o=aw;else
var
K=a(c[3],J),L=a(m[27],k),N=a(c[3],M),O=a(m[27],k),Q=a(c[3],P),R=a(m[27],j),S=e(c[12],R,Q),T=e(c[12],S,O),U=e(c[12],T,N),V=e(c[12],U,L),W=e(c[12],V,K),o=w(A[6],0,0,W);if(f(b,d,i,h(g,s)))var
p=ao;else
if(f(b,d,i,h(g,r(s))))var
p=ar;else
if(f(b,d,i,h(g,n)))var
p=as;else
if(f(b,d,i,h(g,r(n))))var
p=at;else
var
Y=a(c[3],X),Z=a(m[27],k),$=a(c[3],_),aa=a(m[27],i),ab=e(c[12],aa,$),ac=e(c[12],ab,Z),ad=e(c[12],ac,Y),p=w(A[6],0,0,ad);var
ap=[0,af,ae,[2,[0,o,aj,p,ak,k,0]],[0,a(z[41],[2,v]),0],F,1];return a(aq[23],ap)}j(38,[0,n],"String_notation_plugin__String_notation");a(C[9],o);var
D=0,E=0;function
K(i,h,g,f,d,c){var
j=e(p[1],p[8],d),b=a(k[1][8],f);n(a(F[7],j),i,h,g,b);return c}var
N=[0,L,[1,[5,a(i[16],h[7])],0]],O=[1,[5,a(i[16],h[17])],N],Q=[1,[5,a(i[16],h[17])],O],T=[0,[0,0,[0,S,[0,R,[1,[5,a(i[16],h[17])],Q]]],K,E],D],U=0,V=[0,function(a){return q[6]}];r(q[2],W,V,U,T);j(45,[0,o],"String_notation_plugin__G_string");return}
