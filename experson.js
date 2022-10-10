//exports
export const name='pia';
export const age=19;

function main(x){
    x();

}
function callback()
{
    console.log("hi");
}
main(callback);