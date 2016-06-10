"use strict";
const Constants = require ("../../../Constants");
const BogardanRagerBase = require("../setDDG/BogardanRager");

class BogardanRager extends BogardanRagerBase {
  constructor (game) {
    super(game, "Bogardan Rager", "Time Spiral", "TSP");
  }
}

module.exports = BogardanRager;
