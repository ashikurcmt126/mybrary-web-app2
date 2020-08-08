FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,

)

FilePond.setOptions({
    //stylePanelAspectRatio: 2/1
})

FilePond.parse(document.body)