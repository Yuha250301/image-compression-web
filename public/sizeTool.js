$("#container").draggable({
    scroll: false,
    axis: "xy",
    // containment: [-globalContainer.width,-globalContainer.height,2*globalContainer.width,2*globalContainer.height],
    // revert: false,
    // helper: "clone",
    cursor: 'grab',
    disabled: true,
    // distance: 10,
    start: function( event, ui ) {
            $(ui.item).addClass("active-draggable");
    },
    drag: function( event, ui ) {
    },
    stop:function( event, ui ) {
            $(ui.item).removeClass("active-draggable");
    }
});
