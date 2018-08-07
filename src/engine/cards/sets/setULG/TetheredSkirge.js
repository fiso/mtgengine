"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TetheredSkirge extends UnimplementedCard {
  constructor (game) {
    super(game, "Tethered Skirge", "Urza's Legacy", "ULG");
  }
}

module.exports = TetheredSkirge;
