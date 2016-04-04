"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JokulhaupsBase = require("../set6ED/Jokulhaups.js");

class Jokulhaups extends JokulhaupsBase {
  constructor(game) {
    super(game, "Jokulhaups", "Deckmasters", "DKM");
  }
}

module.exports = Jokulhaups;
