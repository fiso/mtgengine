"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImperiousPerfectBase = require("../setpCMP/ImperiousPerfect.js");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor(game) {
    super(game, "Imperious Perfect", "Lorwyn", "LRW");
  }
}

module.exports = ImperiousPerfect;
