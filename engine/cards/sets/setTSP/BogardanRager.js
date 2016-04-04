"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogardanRagerBase = require("../setDDG/BogardanRager.js");

class BogardanRager extends BogardanRagerBase {
  constructor(game) {
    super(game, "Bogardan Rager", "Time Spiral", "TSP");
  }
}

module.exports = BogardanRager;
