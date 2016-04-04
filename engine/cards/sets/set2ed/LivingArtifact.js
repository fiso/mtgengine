"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingArtifactBase = require("../setCED/LivingArtifact.js");

class LivingArtifact extends LivingArtifactBase {
  constructor(game) {
    super(game, "Living Artifact", "Unlimited Edition", "2ED");
  }
}

module.exports = LivingArtifact;
