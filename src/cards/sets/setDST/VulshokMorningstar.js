"use strict";
const Constants = require ("../../../Constants");
const VulshokMorningstarBase = require("../setDDI/VulshokMorningstar");

class VulshokMorningstar extends VulshokMorningstarBase {
  constructor (game) {
    super(game, "Vulshok Morningstar", "Darksteel", "DST");
  }
}

module.exports = VulshokMorningstar;
