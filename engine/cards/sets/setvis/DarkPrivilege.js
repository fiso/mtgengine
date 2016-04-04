"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkPrivilegeBase = require("../setMGB/DarkPrivilege.js");

class DarkPrivilege extends DarkPrivilegeBase {
  constructor(game) {
    super(game, "Dark Privilege", "Visions", "VIS");
  }
}

module.exports = DarkPrivilege;
