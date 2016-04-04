"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EdgeofAutumnBase = require("../setDDG/EdgeofAutumn.js");

class EdgeofAutumn extends EdgeofAutumnBase {
  constructor(game) {
    super(game, "Edge of Autumn", "Future Sight", "FUT");
  }
}

module.exports = EdgeofAutumn;
