/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class FileUpload {
    constructor() {
        this.fileUpload = Selector('li:nth-of-type(18) > a')
        this.fileuploaded = Selector('#uploaded-files')
    }
    async goToFileUpload(){
        await t.hover(this.fileUpload)
                .click(this.fileUpload)
        await t.setFilesToUpload(Selector('#file-upload'), './qa_icon.png')
        await t.wait(4000) 
    }

}

export default FileUpload