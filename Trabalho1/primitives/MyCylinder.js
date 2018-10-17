class MyCylinder extends CGFobject
{
	constructor(scene, base, top, height, slices, stacks)
	{
		super(scene);
        
        this.scene = scene;
        this.slices = slices;
        this.stacks = stacks;
        this.height = height;
        this.rtop = top;
        this.rbase = base;

        this.baselessCylinder = new MyBaselessCylinder(scene, base, top, height, slices, stacks);

        this.top = new MyCircle(scene, slices);

        this.bottom = new MyCircle(scene, slices);

		this.display();
	};

    display()
	{
        this.baselessCylinder.display();

        this.scene.pushMatrix();
            this.scene.translate(0, 0, this.height);
            if(this.top !=null){
                this.scene.pushMatrix();
                    this.scene.scale(this.rtop,this.rtop,1);
                    this.top.display();
                this.scene.popMatrix();
            }
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.scene.scale(-1, -1, 1);
            if(this.bottom !=null){
                this.scene.pushMatrix();
                    this.scene.scale(this.rbase,this.rbase,1);
                    this.bottom.display();
                this.scene.popMatrix();
            }
        this.scene.popMatrix();
    };
}; 