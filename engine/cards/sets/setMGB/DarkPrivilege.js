"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkPrivilege extends Card {
  constructor(game) {
    super(game, "Dark Privilege", "Multiverse Gift Box", "MGB");
  }
}

module.exports = DarkPrivilege;
