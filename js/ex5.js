console.log('ready');
var circlePath = new Path.Circle(new Point(10, 10), 5);
circlePath.style = {
	fillColor: 'rgb(109, 69, 39)'
};

// Make a copy of the path and set its stroke color to red:
var boat = circlePath.clone();
boat.strokeColor = 'rgb(67, 35, 11)';
// Scale the copy:
boat.scale(5, 1.5);


function onFrame(event) {
    if (Key.isDown('right')) {
        boat.translate(5, 0);
    }
    if (Key.isDown('left')) {
        boat.translate(-5, 0);
    }
     if (Key.isDown('up')) {
        boat.translate(0, -5);
    }
     if (Key.isDown('down')) {
        boat.translate(0, 5);
    }
     if (Key.isDown('a')) {
        boat.rotate(-2);
    }
     if (Key.isDown('d')) {
        boat.rotate(2);
    }
     if (Key.isDown('w')) {
        boat.scale(1.1);
         circlePath1.scale(1.1);
         circlePath1.style = {
	fillColor: 'rgba(255, 255, 255, 0.01)'
};
         circlePath2.scale(1.1);
         circlePath2.style = {
	fillColor: 'rgba(255, 255, 255, 0.01)'
};
         circlePath3.scale(1.1);
         circlePath3.style = {
	fillColor: 'rgba(255, 255, 255, 0.01)'
};
    }
     if (Key.isDown('s')) {
        boat.scale(0.9);
          circlePath1.scale(0.9);
         circlePath1.style = {
	fillColor: 'rgba(255, 255, 255, 0.72)'
};
         circlePath2.scale(0.9);
         circlePath2.style = {
	fillColor: 'rgba(255, 255, 255, 0.72)'
};
         circlePath3.scale(0.9);
         circlePath3.style = {
	fillColor: 'rgba(255, 255, 255, 0.72)'
};
    }
    
}

var circlePath1 = new Path.Circle(new Point(100, 100), 10);
circlePath1.style = {
	fillColor: 'rgba(255, 255, 255, 0.72)'
};

var circlePath2 = new Path.Circle(new Point(300, 200), 70);
circlePath2.style = {
	fillColor: 'rgba(255, 255, 255, 0.72)'
};

var circlePath3 = new Path.Circle(new Point(400, 100), 30);
circlePath3.style = {
	fillColor: 'rgba(255, 255, 255, 0.74)'
};



