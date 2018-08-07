"use strict";
const Constants = require ("../../../Constants");
const BoompileBase = require("../setPZ2/Boompile");

class Boompile extends BoompileBase {
  constructor (game) {
    super(game, "Boompile", "Commander 2016", "C16");
  }
}

module.exports = Boompile;
