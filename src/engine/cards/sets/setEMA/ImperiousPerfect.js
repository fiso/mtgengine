"use strict";
const Constants = require ("../../../Constants");
const ImperiousPerfectBase = require("../setCMA/ImperiousPerfect");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor (game) {
    super(game, "Imperious Perfect", "Eternal Masters", "EMA");
  }
}

module.exports = ImperiousPerfect;
