"use strict";
const Constants = require ("../../../Constants");
const JeditsDragoonsBase = require("../setDDI/JeditsDragoons");

class JeditsDragoons extends JeditsDragoonsBase {
  constructor(game) {
    super(game, "Jedit's Dragoons", "Time Spiral", "TSP");
  }
}

module.exports = JeditsDragoons;
