"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingSkirge extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Skirge", "Urza's Legacy", "ULG");
  }
}

module.exports = LurkingSkirge;
