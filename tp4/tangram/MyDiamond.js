import {CGFobject} from '../../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.initBuffers(color);
	}
	
	initBuffers(color) {
		this.vertices = [
			// Front face
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,	//3

			// Back face
			-1, 0, 0,	//4
			0, -1, 0,	//5
			0, 1, 0,	//6
			1, 0, 0,	//7

		];

		//Counter-clockwise reference of vertices
		this.indices = [
			// Front face
			0, 1, 2,
			1, 3, 2,

			// Back face
			4, 6, 5,
			5, 6, 7,
		];

		this.normals = [
			// Front face
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			// Back face
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];

		if(color == "green"){
			this.texCoords = [
				// Front face
				0, 0.5,
				0.25, 0.75,
				0.25, 0.25,
				0.5, 0.5,

				// Back face
				0, 0.5,
				0.25, 0.75,
				0.25, 0.25,
				0.5, 0.5
			];
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

