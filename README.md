# cv2

This project with yeoman and version 0.15.1.  To build the production site run `grunt serve:dist`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

Run `dev_appserver.py --port=9999 .` to run the app engine preview before deploying to Google App Engine
When building the production site
* Remove the hash from the jpg and png file names
* Edit the css and js accordingly for removal of the hash tags
* Verify the fonts gets copied correctly
* Run `gcloud app deploy -v #` when ready to deploy


## Testing

Running `grunt test` will run the unit tests with karma.

## Modifying Prod
* Clone the repo
* Modify files in the dist folder
  * To add new work history content
    * Resumes are uploaded in the resume folder
    * update the index.html
      * link to the resume
      * new li(s) and toggle switches
* Run `gcloud app deploy` to deploy to prod or `gcloud app deploy --nopromote` to push a new version w/o overriding the main site
* Push changes
