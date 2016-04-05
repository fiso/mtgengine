"use strict";
const Constants = require ("../../../Constants");
const DarkPrivilegeBase = require("../setMGB/DarkPrivilege");

class DarkPrivilege extends DarkPrivilegeBase {
  constructor(game) {
    super(game, "Dark Privilege", "Visions", "VIS");
  }
}

module.exports = DarkPrivilege;
