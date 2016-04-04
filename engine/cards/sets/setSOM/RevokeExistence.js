"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevokeExistenceBase = require("../setBNG/RevokeExistence.js");

class RevokeExistence extends RevokeExistenceBase {
  constructor(game) {
    super(game, "Revoke Existence", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RevokeExistence;
