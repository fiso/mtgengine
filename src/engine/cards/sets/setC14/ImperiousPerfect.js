"use strict";
const Constants = require ("../../../Constants");
const ImperiousPerfectBase = require("../setCMA/ImperiousPerfect");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor (game) {
    super(game, "Imperious Perfect", "Commander 2014", "C14");
  }
}

module.exports = ImperiousPerfect;
