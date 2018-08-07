"use strict";
const Constants = require ("../../../Constants");
const JokulhaupsBase = require("../setMED/Jokulhaups");

class Jokulhaups extends JokulhaupsBase {
  constructor (game) {
    super(game, "Jokulhaups", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Jokulhaups;
