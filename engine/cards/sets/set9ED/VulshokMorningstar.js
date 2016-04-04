"use strict";
const Constants = require ("../../../Constants");
const VulshokMorningstarBase = require("../setDST/VulshokMorningstar");

class VulshokMorningstar extends VulshokMorningstarBase {
  constructor(game) {
    super(game, "Vulshok Morningstar", "Ninth Edition", "9ED");
  }
}

module.exports = VulshokMorningstar;
