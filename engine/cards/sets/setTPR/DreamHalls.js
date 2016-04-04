"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamHallsBase = require("../setSTH/DreamHalls.js");

class DreamHalls extends DreamHallsBase {
  constructor(game) {
    super(game, "Dream Halls", "Tempest Remastered", "TPR");
  }
}

module.exports = DreamHalls;
