"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirageMirror extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirage Mirror", "Hour of Devastation", "HOU");
  }
}

module.exports = MirageMirror;
