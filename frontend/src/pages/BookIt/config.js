export const 
  GOOGLE_API_KEY = 'AIzaSyByvAfDAgpdItICoOiIuGit0tFkQBeQfr4',
  CALENDAR_ID = 'r3eel99ge57mhdph553gftvpas@group.calendar.google.com';

  
let config = {
	client_id: '836704981964-tihnifhcnflq9sq72jdq4f3rlan78mab.apps.googleusercontent.com',
	api_key: 'AIzaSyByvAfDAgpdItICoOiIuGit0tFkQBeQfr4',
	scope: 'https://www.googleapis.com/auth/calendar',
	discoveryDocs: [ 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest' ],
	project_id: '836704981964',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://www.googleapis.com/oauth2/v3/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_secret: 'dyxr3ZmPW6CjWzMQB8V3dlcY',
	redirect_uris: [ 'http://localhost:5000','http://localhost:3000' ],
	javascript_origins: [ 'http://localhost:5000','http://localhost:3000' ]
};

export { config };