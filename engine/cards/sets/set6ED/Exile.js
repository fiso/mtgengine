"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExileBase = require("../setALL/Exile.js");

class Exile extends ExileBase {
  constructor(game) {
    super(game, "Exile", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Exile;
