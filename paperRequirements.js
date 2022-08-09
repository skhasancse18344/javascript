function paperRequirement(book1, book2, book3){

    let totalPage = (book1*100) + (book2*200) + (book3*300);
    
    return totalPage;
}

let totalPaper = paperRequirement(8, 5, 9);
console.log(totalPaper);