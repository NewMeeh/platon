import { Provider } from "@angular/core";
import { ResourceEventProvider } from "./models/resource-event-provider";
import { ResourceFileProvider } from "./models/resource-file-provider";
import { ResourceInvitationProvider } from "./models/resource-invitation-provider";
import { ResourceMemberProvider } from "./models/resource-member-provider";
import { ResourceProvider } from "./models/resource-provider";
import { ResourceWatcherProvider } from "./models/resource-watcher-provider";
import { RemoteResourceEventProvider } from "./providers/remote-resource-event.provider";
import { RemoteResourceFileProvider } from "./providers/remote-resource-file.provider";
import { RemoteResourceInvitationProvider } from "./providers/remote-resource-invitation.provider";
import { RemoteResourceMemberProvider } from "./providers/remote-resource-member.provider";
import { RemoteResourceWatcherProvider } from "./providers/remote-resource-watcher.provider";
import { RemoteResourceProvider } from "./providers/remote-resource.provider";

export const RESOURCE_PROVIDERS: Provider[] = [
  { provide: ResourceProvider, useClass: RemoteResourceProvider },
  { provide: ResourceFileProvider, useClass: RemoteResourceFileProvider },
  { provide: ResourceEventProvider, useClass: RemoteResourceEventProvider },
  { provide: ResourceInvitationProvider, useClass: RemoteResourceInvitationProvider },
  { provide: ResourceMemberProvider, useClass: RemoteResourceMemberProvider },
  { provide: ResourceWatcherProvider, useClass: RemoteResourceWatcherProvider },
];
