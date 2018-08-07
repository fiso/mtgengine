"use strict";
const Constants = require ("../../../Constants");
const DarkPrivilegeBase = require("../setVIS/DarkPrivilege");

class DarkPrivilege extends DarkPrivilegeBase {
  constructor (game) {
    super(game, "Dark Privilege", "Multiverse Gift Box", "MGB");
  }
}

module.exports = DarkPrivilege;
