"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkPrivilege extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Privilege", "Multiverse Gift Box", "MGB");
  }
}

module.exports = DarkPrivilege;
