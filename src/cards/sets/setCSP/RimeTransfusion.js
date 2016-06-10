"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RimeTransfusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Rime Transfusion", "Coldsnap", "CSP");
  }
}

module.exports = RimeTransfusion;
