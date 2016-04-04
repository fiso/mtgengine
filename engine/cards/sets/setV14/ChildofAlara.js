"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChildofAlaraBase = require("../setCON/ChildofAlara.js");

class ChildofAlara extends ChildofAlaraBase {
  constructor(game) {
    super(game, "Child of Alara", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = ChildofAlara;
