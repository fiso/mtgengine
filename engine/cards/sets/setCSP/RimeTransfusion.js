"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RimeTransfusion extends Card {
  constructor(game) {
    super(game, "Rime Transfusion", "Coldsnap", "CSP");
  }
}

module.exports = RimeTransfusion;
