"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeditsDragoonsBase = require("../setDDI/JeditsDragoons.js");

class JeditsDragoons extends JeditsDragoonsBase {
  constructor(game) {
    super(game, "Jedit's Dragoons", "Time Spiral", "TSP");
  }
}

module.exports = JeditsDragoons;
