"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoldintoAether extends UnimplementedCard {
  constructor (game) {
    super(game, "Fold into Æther", "Fifth Dawn", "5DN");
  }
}

module.exports = FoldintoAether;
