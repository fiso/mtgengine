"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkPrivilege extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Privilege", "Visions", "VIS");
  }
}

module.exports = DarkPrivilege;
