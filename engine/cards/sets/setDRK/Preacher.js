"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PreacherBase = require("../setMED/Preacher.js");

class Preacher extends PreacherBase {
  constructor(game) {
    super(game, "Preacher", "The Dark", "DRK");
  }
}

module.exports = Preacher;
